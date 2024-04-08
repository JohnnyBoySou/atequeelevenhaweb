
export const getPins = async () => {
  const response = await fetch('https://www.atequeelevenha.com/api/pins');
  const data = await response.json();
  return data;
}

export const FILTERS = ["Tudo", "Deus", "Inspiração", "Bom dia", "Papel de Parede", "Motivação", "Versículos", "Ensinamentos"];
