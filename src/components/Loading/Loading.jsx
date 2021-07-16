import {Spin} from 'antd';

import './Loading.sass';

const Loading = () =>{
    return (
        <div className="loading">
            <Spin size="large"/>
        </div>
    )
}