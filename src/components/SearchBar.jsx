export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={() => props.onSearch("OLVVVVV")}>Agregar</button>
      </div>
   );
}
