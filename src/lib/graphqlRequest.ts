export async function graphqlRequest(query: string, variables = {}) {
  // En Astro, las variables se leen con import.meta.env
  const url = import.meta.env.WORDPRESS_API_URL;

  if (!url) {
    throw new Error("Falta la variable de entorno WORDPRESS_API_URL en el archivo .env");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Error en la petición a GraphQL: ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors) {
    console.error("Errores de GraphQL:", json.errors);
    throw new Error("Error en la consulta GraphQL");
  }

  return json.data;
}