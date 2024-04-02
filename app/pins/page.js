'use client'
import React, { useEffect, useState } from 'react'
import { Main, Column, Title , Row, PinBt, Label} from '@theme/global'
import colors from '@theme/colors';
import { getPins, FILTERS } from '@requests/pins'
import './pins.css'
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';
import { Library, Combine } from 'lucide-react';

function Pins(){
    const [pins, setpins] = useState();
    const [type, settype] = useState('Tudo');

    const filteredPosts = type === 'Tudo' ? pins : pins.filter((pin) => pin.tag === type)
    useEffect(() => {
        getPins().then(data => setpins(data))
    }, [])

 

     const [collections, setCollections] = useState([
        {
            id: 1, 
            name: 'Teste 1',
            capa: 'https://i.pinimg.com/236x/15/a4/a3/15a4a30cb7a18b2868e8ee8587c3726e.jpg',
            pins: [
                {
                    title: 'Pin1',
                    capa: 'https://i.pinimg.com/564x/51/c5/7f/51c57f0b4917206a10fd7775b1353d5b.jpg',
                    id: 12,
                }
            ],
        },
        {
            id: 2, 
            name: 'Teste 2',
            capa: 'https://i.pinimg.com/564x/43/eb/d1/43ebd150ef45e9de898eff3a0880737b.jpg',
            pins: [],
        },
        {
            id: 3, 
            name: 'Teste 3',
            capa: 'https://i.pinimg.com/564x/51/c5/7f/51c57f0b4917206a10fd7775b1353d5b.jpg',
            pins: [],
        },
     ])

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;

        // Verifica se o pin foi movido para a mesma coleção
        if (destination.droppableId === source.droppableId) return;
        // Encontra o índice da coleção de origem e destino
        const sourceCollectionIndex = collections.findIndex(col => col.id === parseInt(source.droppableId));
        const destinationCollectionIndex = collections.findIndex(col => col.id === parseInt(destination.droppableId));
        
        // Encontra o pin que foi movido
        const pin = filteredPosts.find(post => post.id === draggableId);
        
        // Verifica se a coleção de origem e destino existem
        console.log('tes')
        
        // Cria uma cópia das coleções
        const updatedCollections = [...collections];
        console.log('updatedCollections', updatedCollections)
        // Verifica se o pin já está presente na coleção de destino
        const destinationCollection = updatedCollections[destinationCollectionIndex];
        const pinExistsInDestination = destinationCollection.pins.some(p => p.id === draggableId);
    
        // Adiciona o pin à coleção de destino apenas se não estiver presente
        if (!pinExistsInDestination) {
            console.log('add pin to collection')
            destinationCollection.pins = [...destinationCollection.pins, pin];
            setCollections(updatedCollections);
        }
    };
    



    const CollectionsList = () => {
        
        const Collection = ({itm, isDraggingOver }) => {
            return(
                <Row style={{ marginBottom: 12,  backgroundColor: isDraggingOver ? colors.green : 'transparent', justifyContent: 'center', alignItems: 'center',  borderRadius: 12, padding:12, height: 84, width: 84, justifyContent: 'center', alignItems: 'center', }}>
                    <img src={itm.capa} alt={itm.name} style={{ width:72, height: 72, borderRadius: 12, objectFit: 'cover' }} />
                   {isDraggingOver &&  <Combine color='#fff' size={32} style={{ marginLeft: 12, }}/>}
                </Row>
            )
        }
        return(
            <>
                {collections.map((collection) => (
                    <Droppable key={collection.id.toString()} droppableId={collection.id.toString()} isCombineEnabled>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <Collection itm={collection} isDraggingOver={snapshot.isDraggingOver}/>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </>
        )
    }
    const Cards = () => { 
        const Pin = ({itm, isDragging }) => { 
            return (
                <img src={itm.image} alt={itm.title}  style={{ width:  '100%', height: 'auto', borderRadius: 24, objectFit: 'cover', transition: 'linear .2s',    transform: isDragging ? 'scale(0.5)' : 'scale(1)'       }} />
            )}
        return (
            <Droppable droppableId="cards" isCombineEnabled>
                {(provided, snapshot) => (
                    <div 
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='mansory-layout'
                    >
                        {filteredPosts && filteredPosts.map((pin, index) => (
                            <Draggable key={pin.id} draggableId={pin.id} index={index}>
                                {(provided, snapshot) => (
                                    <div 
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className='mansory-item'
                                    >
                                        <Pin itm={pin} isDragging={snapshot.isDragging} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable> 
        );
    }
    

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <Main style={{ overflowY: 'hidden',flexDirection: 'row', }}>


            <Column style={{ borderRadius: 12, margin: '0px 12px 12px 0px',  height: '90vh',  padding: 24, backgroundColor: '#F8E9DD',  alignItems: 'center', }}>
                
                <Row style={{ padding: '10px 16px', borderRadius: 100, backgroundColor: colors.primary+20, justifyContent: 'center', alignItems: 'center',  }}>
                    <Library color={colors.primary}/>
                    <Label style={{ marginLeft: 5, fontSize: 18, color: colors.primary }}>Pastas</Label>
                </Row>
                <CollectionsList />
             </Column>   


            <Column style={{ margin: 12, }}>
                <Title style={{}}>Pins Cristãos</Title>
                <Row style={{ margin: '30px 0px', overflowX: 'auto', flex: 1, }}>
                    {FILTERS.map((filter) => ( <PinBt onClick={() => settype(filter)}key={filter} style={{backgroundColor: type === filter && colors.primary, color: type === filter ? '#fff' : colors.title, }}>{filter}</PinBt>))}
                </Row>
                <Column style={{ overflowY: 'auto', height: '80vh',  borderRadius: 24, }}>
                    <Cards />
                </Column>

            </Column>

        </Main>
        </DragDropContext>
    );
}
export default Pins;