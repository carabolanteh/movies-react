import {Spin} from 'antd';

import './Loading.sass';

const Loading = () =>{
    return (
        <div className="loading">
            <Spin size="large"/>
            <h5>Cargando...</h5>
        </div>
    )
}

export default Loading;