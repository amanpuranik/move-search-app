import { useEffect, useState } from "react";
import Modal from 'react-modal';

const TableComponent = ({ data }) => {

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "grey",
      width: 400,
      height: 400,
    },
  };

    const [hover, setHover] = useState(false)
    const [clickedItem, setClickedItem] = useState(null)
    const [isOpen, setModalOpen] = useState(false)

       useEffect(()=>{
      console.log(clickedItem)}, [clickedItem])


    function handleModal(item){
      setClickedItem(item)

      setModalOpen(true)
    }

    function closeModal(){
      setModalOpen(false)
    }

    return (
      <div>
      <table>
        <tbody className="movies">
          {data.map((item) => (
            <tr  key={item.id} className='movie'>
              <div>
                <img className="image" onClick={()=>handleModal(item)}   src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}/>
              </div>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal  isOpen={isOpen} style={customStyles}>
      {clickedItem &&(
        <div>
        <div>
        {clickedItem.title}
        </div>
        <p>
        {clickedItem.overview}!
        </p>
        </div>)}
        <button onClick={closeModal}>Close</button>
        </Modal>
      </div>


      
    );
  };

  export default TableComponent