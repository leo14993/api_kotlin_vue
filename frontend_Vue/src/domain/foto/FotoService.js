export default class FotoService {

  constructor(resource){

    this._resource = resource('v1/fotos{/id_da_foto}');

  }
  lista(){

    return this._resource
    .query()
    .then( res => res.json());
  }

  cadastra(foto){

    return this._resource.save(foto)

  }

  apaga(id_da_foto) {
    return this._resource.delete({ id_da_foto }); // { id_da_foto : id_da_foto } chave e valores iguais
  }
}
