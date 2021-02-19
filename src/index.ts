import axios from 'axios';
import { Observable } from 'rxjs';

void (async () => {
  try {
    const observable = new Observable(subscriber => {
      axios.get( 'https://pokeapi.co/api/v2/pokemon/ditto' )
        .then( ( response ) => {
          subscriber.next( response.data );
          subscriber.complete();
        } )
        .catch( ( error ) => {
          subscriber.error(error);
        } );
    });

    observable.subscribe(x => {
      console.log(x);
    });

  } catch (error) {
    console.error(error);
  }
})();
