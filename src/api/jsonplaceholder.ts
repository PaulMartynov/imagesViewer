export function parseOptions(options: RequestOptions | undefined): string {
  if (!options) {
    return "";
  }
  const keys = Object.keys(options);
  if (keys.length === 0) {
    return "";
  }
  const listOfOptions = keys.map((key) => `${key}=${options[key]}`);
  return `?${listOfOptions.join("&")}`;
}

export async function getPhotos(options: RequestOptions | undefined) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/photos${parseOptions(options)}`
  );
  const data = await resp.json();

  return {
    success: resp.ok,
    status: resp.statusText,
    code: resp.status,
    data,
  };
}

export async function deletePhoto(id: number) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`,
    { method: "DELETE" }
  );

  return {
    success: resp.ok,
    status: resp.statusText,
    code: resp.status,
  };
}
