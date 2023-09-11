import {} from 'react'
import './Produtos.css'

function Produtos(){
    return(
        <>
        <h1>Produtos</h1>
        <div className='container'>

            <div className='item' >
            <h3>HOMEM DE FERRO</h3>
            <img src="https://th.bing.com/th/id/OIP.tLC1_PH6bcp_m2wNf83-BAHaM5?pid=ImgDet&rs=1" alt="" />
            </div>

            <div className='item'>
            <h3>MARIO</h3>
            <img src="https://th.bing.com/th/id/OIP.U2KZu05LGgsqQg7Mc3_86AHaL7?pid=ImgDet&rs=1" alt="" />
            </div>

            <div className='item'>
            <h3>SONIC</h3>
            <img src="https://th.bing.com/th/id/OIP.fjDQXG7AchNvCm-BctHCvQHaLk?pid=ImgDet&rs=1" alt="" />
            </div>

            <div className='item'>
            <h3>GELADEIRA</h3>
            <img src="https://th.bing.com/th/id/OIP.mV2sxhyEYgawdsOB2U6-kQHaGg?pid=ImgDet&rs=1" alt="" />
            </div>
        </div>
       
       
               
        
        </>
    )
}
export default Produtos