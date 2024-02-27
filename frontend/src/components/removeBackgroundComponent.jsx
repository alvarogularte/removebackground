import React, { useState } from 'react';
import axios from 'axios';

const RemoveBackgroundForm = () => {
  const [inputFileName, setInputFileName] = useState('');
  const [outputFileName, setOutputFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/remove-background', { inputFileName, outputFileName });
      setMessage('Background removido com sucesso.');
    } catch (error) {
      console.error(error);
      setMessage('Erro ao remover o background.');
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome do arquivo de entrada" value={inputFileName} onChange={(e) => setInputFileName(e.target.value)} required />
        <input type="text" placeholder="Nome do arquivo de saída" value={outputFileName} onChange={(e) => setOutputFileName(e.target.value)} required />
        <button type="submit" disabled={loading}>Remover Background</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RemoveBackgroundForm;
