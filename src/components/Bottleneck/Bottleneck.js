import './Bottleneck.css';

function Bottleneck() {

  // functions
  const openBottleneck = (e) => {
    e.stopPropagation();
    alert("bootlenect pressed")
  }
  return (
    <div>
      <p onClick={openBottleneck}>Bottleneck</p>
    </div>
  );
}

export default Bottleneck;
