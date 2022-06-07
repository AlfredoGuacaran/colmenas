const URL = 'http://localhost:5000/';

export async function getCosechas() {
  const response = await fetch(`${URL}getcosechas`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return { data };
}

export async function putCosecha(newCosecha) {
  const response = await fetch(`${URL}createcosecha`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCosecha),
  });
  const data = await response.json();
  return { data };
}
