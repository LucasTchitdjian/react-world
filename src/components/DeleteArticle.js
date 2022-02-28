import React from 'react';
import axios from 'axios';

const DeleteArticle = ({id}) => {
  const handleDelete = () => {
    axios.delete('http://localhost:3003/articles/' + id);
    window.location.reload();
  };
  return (
      <button onClick={() => {
        if (window.confirm('Voulez vous suprimer cet article ?')) {
          handleDelete();
        }
      }}
      >
      Suprimer
      </button>
  );
};

export default DeleteArticle;