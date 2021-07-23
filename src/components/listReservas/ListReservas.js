import { useDispatch, useSelector } from "react-redux";

const ListReservas = () => {


    const dispatch = useDispatch()


    const {data,exitoso} = useSelector(state => state.vuelos)    
    console.log(data);



  return (
    <div className="container">
      <table class="table table-secondary">
        <thead>
          <tr>
            <th scope="col">COD</th>
            <th scope="col">Origen</th>
            <th scope="col">Destino</th>
            <th scope="col">Fecha de Ida</th>
            <th scope="col">Fecha de retorno</th>
            <th scope="col">Num Boletos</th>
            <th scope="col">Total Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListReservas;
