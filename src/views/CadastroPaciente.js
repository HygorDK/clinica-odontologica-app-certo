import React from'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import SelectMenu from '../components/selectMenu'
import Footer from './Footer'
import Header from './Header'
import InputMask from "react-input-mask";
import backgroundImage from '../image/fundo.jpeg'
import './styles.css';

const a=()=>{
  
        window.location.href ="./CadastroPaciente";
}
const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortConfig };
  };
  
  const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table id="tbPaciente">
              <caption></caption>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort('name')}
                className={getClassNamesFor('name')}
              >
                Nome
              </button>
            </th>
            <th>
              CPF
            </th>
            <th>
                Data de Nascimento
            </th>
            <th>
                Sexo
            </th>
            <th>
                Telefone
            </th>
            <th>
                Celular
            </th>
            <th>
                Convênio
            </th>
            <th>
                Email
            </th>
            <th>
                CEP
            </th>
            <th>
                Endereço
            </th>
            <th>
                Número
            </th>
            <th>
                Complemento
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.cpf}</td>
              <td>{item.data}</td>
              <td>{item.sexo}</td>
              <td>{item.telefone}</td>
              <td>{item.celular}</td>
              <td>{item.convenio}</td>
              <td>{item.email}</td>
              <td>{item.cep}</td>
              <td>{item.endereco}</td>
              <td>{item.numero}</td>
              <td>{item.complemento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };


  
class CadastroPaciente extends React.Component{
    
    state ={
        nome:'',
        CPF:'',
        telefone:'',
        celular:'',
        email:'',
        cep:'',
        endereco:'',
        numero:'',
        complemento:'',
        data:'',
        convenio:''
    }
    
    render(){
    
            
      const lista = [
          {label:'SELECIONE', value:''},
          {label:'MASCULINO', value:'Masculino'},
          {label:'FEMININO', value:'Feminino'},
          {label:'NÃO-BINÁRIO', value:'Nb'},
          {label:'NÃO ESPECIFICADO', value:'Ne'}
      ]
      
    
        return (
            
            <div style={{ backgroundImage: `url(${backgroundImage})` }}> 
                <Header></Header>
                
               <main className="container ">
            
              
            <Card title = "Cadastro de Paciente">
        <form>
            <div class="row">
                <div class="col-lg-12">
                <div class="form-group">
                    <div class="bs-component">
                        <label htmlFor ="inputNome"> Nome:  * </label>
                            <input type= "text" 
                            id="nome" 
                            className="form-control"
                            name="nome"
                            onChange={e=>this.setState({nome:e.target.value})}/>
                    </div>
                    </div>
                </div>
            </div>
            <div class ="row">
                <div class="col-md-4 col-xs-4">
                          <label  htmlFor="inputCPF">CPF:  *</label>
                              <InputMask
                              mask="999.999.999-99"
                              type= "text" 
                              id="cpf" 
                              className="form-control"
                              name="CPF"
                              onChange={e=>this.setState({CPF:e.target.value})}/>
                </div>
                <div class="col-md-4 col-xs-4">
                        <FormGroup label="Data de Nascimento:   *" htmlFor="inputdatanascimento">
                            <input type= "date" 
                            id="data" 
                            className="form-control"
                            name="datanascimento"
                            onChange={e=>this.setState({datanascimento:e.target.value})}/>
                        </FormGroup>
                </div>
                <div class="col-md-4 col-xs-4">
                        <FormGroup htmlFor="inputSexo" label= "Sexo:  *">
                            <SelectMenu id="sexo" className="form-control"lista={lista}/>
                        </FormGroup>
                </div>
            </div>
            <div class= "row">
                <div class="col-md-4 col-xs-4">
                        <label  htmlFor="inputTelefone">Telefone:  </label>
                            <InputMask
                            mask="(99) 99999-9999"
                            type= "text" 
                            id="telefone" 
                            className="form-control"
                            name="telefone"
                            onChange={e=>this.setState({telefone:e.target.value})}/>
                </div>
                <div class="col-md-4 col-xs-4">
                        
                        <label htmlFor="inputCelular">Celular:  </label>
                        <InputMask
                            mask="(99) 9 9999-9999"
                            type= "text" 
                            id="celular" 
                            className="form-control"
                            name="Celular"
                            onChange={e=>this.setState({Celular:e.target.value})}/>
                </div>
                <div class="col-md-4 col-xs-4">
                        
                        <label htmlFor="inputConvenio">Convênio:  </label>
                        <input type= "text" 
                            id="convenio" 
                            className="form-control"
                            name="Convenio"
                            onChange={e=>this.setState({Convenio:e.target.value})}/>
                </div>
            </div>
            <div class= "row">
                <div class="col-md-12 col-xs-12">
                        <FormGroup label="Email:   " htmlFor="inputEmail">
                            <input type= "email" 
                            id="email" 
                            className="form-control"
                            name="email"
                            onChange={e=>this.setState({email:e.target.value})}/>
                        </FormGroup>
                </div>
            </div>
            <div class ="row">
                <div class="col-md-2 col-xs-2">
                        <FormGroup label="CEP:   *" htmlFor="inputCep">
                        <InputMask
                            mask="9999-999"
                            type= "text" 
                            id="cep" 
                            className="form-control"
                            name="cep"
                            onChange={e=>this.setState({Cep:e.target.value})}/>
                        </FormGroup>
                </div>
                <div class="col-md-6 col-xs-6">
                        <FormGroup label="Endereço:   *" htmlFor="inputEndereco">
                            <input type= "text" 
                            id="endereco" 
                            className="form-control"
                            name="endereco"
                            onChange={e=>this.setState({endereco:e.target.value})}/>
                        </FormGroup>
                </div>
                <div class="col-md-2 col-xs-2">
                        <FormGroup label="Numero:   *" htmlFor="inputNumero">
                            <input type= "text" 
                            id="numero" 
                            className="form-control"
                            name="Numero"
                            onChange={e=>this.setState({Numero:e.target.value})}/>
                        </FormGroup>
                </div>
                <div class="col-md-2 col-xs-2">
                        <FormGroup label="Complemento:   " htmlFor="inputComplemento">
                            <input type= "text" 
                            id="complemento" 
                            className="form-control"
                            name="complemento"
                            onChange={e=>this.setState({complemento:e.target.value})}/>
                        </FormGroup>
                </div> 
            </div>
                        <br>
                        </br>
                        <br>
                        </br>
                        <br>
                        </br>
                    <button type="button" id="btEntrar" className="btn btn-success"  >Cadastrar</button>
                      <button className="btn btn-primary">Consultar</button>
                      <button type="reset" className="btn btn-warning" >Apagar</button>
          </form>
        </Card>
        </main>
        <Card title = "Listagem de Pacientes">
           
    <div className="App">
      <ProductTable
        products={[
          { id: 1, name: 'Fabricio de Abreu', cpf: '517.102.450_26', data:'19/08/2003', sexo:'MASCULINO', telefone:'(16)3382_1562', celular:'(16)99255_5807', convenio:'', email:'frabeu@gmail.com',cep:'15997_112', endereco: 'Rua Jospé bonfín', numero:'821', complemento:'sobrado'},
          { id: 2, name: 'Ana Clara Rodrigues', cpf: '740.424.070_05', data: '30/07/2001' , sexo:'FEMININO', telefone:'(16)4457_1895', celular:'(16)99747_8473', convenio:' ', email:'AnaC@gmail.com', cep:'18833_111', endereco:'Rua dos Pioneiros', numero:'222', complemento:'Fundos'},
          { id: 3, name: 'Hugo Martins', cpf: '716.630.250_02', data: '18/01/2003', sexo:'NÃO-BINÁRIO', telefone:'(15)8744_6792', celular:'(16)98384_8939', convenio:'', email:'HugoM@hotmail.com', cep:'29292_000',endereco:'Av Pedro Manna', numero:'888', complemento:'Centro' },
          { id: 4, name: 'Renan da Silva Santo', cpf: '249.466.480_20', data: '13/04/1970', sexo:'NÃO ESPECIFICADO', telefone:'(13)7777_1234', celular:'(13)98788_7685', convenio:'', email:'RenanS@outlook.com', cep:'29629_000', endereco:'Av Luiz de Capua', numero:'133', complemento:'Fundos'},
          { id: 5, name: 'Maria Zilda Veiga', cpf: '449.542.280_42', data: '15/01/1968', sexo:'FEMININO', telefone:'(16)3067_7532', celular:'(16)99132_1822', convenio:'Empresarial', email:'ilzamaria@gmail.com',cep:'15997_920', endereco: 'Av. Linda de Morais', numero:'221', complemento:'casa azul'},
          { id: 6, name: 'Julio Junior Cristian', cpf: '731.554.580_89', data: '29/12/1998' , sexo:'NÃO-BINÁRIO', telefone:'(16)3372_1232', celular:'(16)99982_5765', convenio:'', email:'amaisbonita@outlook.com',cep:'15996_097', endereco: 'Rua Americo Brasil', numero:'342', complemento:''},
          { id: 7, name: 'Wynderson Bessi de Souza', cpf: '083.335.610_04', data:'06/02/2006' , sexo:'MASCULINO', telefone:'(16)3382_2009', celular:'(16)99913_3112', convenio:'', email:'christiana_empresaria@outlook.com',cep:'15997_234', endereco: 'Rua Pilttover', numero:'612', complemento:'' },
        ]}
      />
    </div>
  
        </Card>
        <Footer></Footer>
    </div>

        )


    }


        }
        
export default CadastroPaciente;

