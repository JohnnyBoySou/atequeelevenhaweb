'use client'
import React, { useEffect, useState } from 'react'
import { Main, Column, Title , Row, PinBt, Label} from '@theme/global'
import colors from '@theme/colors';
import { getPins, FILTERS } from '@requests/pins'
import './pins.css'
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';


function Pins(){
    const [pins, setpins] = useState();
    const [type, settype] = useState('Tudo');

    const filteredPosts = type === 'Tudo' ? pins : pins.filter((pin) => pin.tag === type)
    useEffect(() => {
        getPins().then(data => setpins(data))
    }, [])


    const Pin = ({itm, isDragging }) => { 
        return (
            <img src={itm.image} alt={itm.title}  style={{ width: '100%', height: 'auto', borderRadius: 24,   transform: isDragging ? 'scale(0.6)' : 'scale(1)'}} />
        )
     }

     const [collections, setCollections] = useState([
        {
            id: 1, 
            name: 'Teste 1',
            capa: 'https://i.pinimg.com/236x/15/a4/a3/15a4a30cb7a18b2868e8ee8587c3726e.jpg',
            pins: [
                {
                    name: 'Pin1',
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
    


    const Collection = ({itm, isDraggingOver }) => {
        return(
            <Column style={{ marginBottom: 12,  backgroundColor: isDraggingOver ? 'red' : 'transparent'}}>
                <img src={itm.capa} alt={itm.name} style={{ width:62, height: 62, borderRadius: 12,  }} />
                <Label style={{ fontSize: 16, textAlign: 'center', }}>{itm.name}</Label>
                {itm.pins.map((pin) => (
                   <Label key={pin}>{pin.title}</Label>
                ))}
            </Column>
        )
    }

    const CollectionsList = () => {
        return(
            <>
                {collections.map((collection) => (
                    <Droppable key={collection.id.toString()} droppableId={collection.id.toString()}>
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
        return (
            <Droppable droppableId="cards">
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
        <Main style={{}}>
            <Row>
                <Column style={{ borderRadius: 12, margin: '12px 12px 12px 0px', backgroundColor: '#F8E9DD',  alignItems: 'center', }}>
                    <Title style={{ margin: 10, fontSize: 24,}}>Coleções</Title>
                    <CollectionsList />
                </Column>   


            <Column>
                <Title style={{}}>Pins</Title>
                <Row style={{ margin: '20px 0px' }}>
                    {FILTERS.map((filter) => (
                        <PinBt
                            onClick={() => settype(filter)}
                            key={filter}
                            style={{
                                backgroundColor: type === filter && colors.primary,
                                color: type === filter ? '#fff' : colors.title,
                            }}
                        >
                            {filter}
                        </PinBt>
                    ))}
                </Row>


                <Cards />

            </Column>

            </Row>
        </Main>
        </DragDropContext>
    );
}
export default Pins;