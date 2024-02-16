export function logger(useSWRNext: any) {
  // si vas a utilizar esto en una aplicación de larga escala utiliza aquí tipos más especificos que any
  return (key: any, fetcher: any, config: any) => {
    const extendedFetcher = (...args: any[]) => {
      console.log('SWR Request:', key);
      return fetcher(...args);
    };
    
    return useSWRNext(key, extendedFetcher, config);
  };
}