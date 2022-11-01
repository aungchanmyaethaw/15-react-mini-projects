// {
//     id: 1,
//     name: "Bertie Yates",
//     age: 29,
//     image:
//       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
//   },

const List = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <span>{age} years</span>
      </div>
    </article>
  );
};

export default List;
