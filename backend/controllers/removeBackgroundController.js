const removeBackground = require('../scripts/remover_bg');

exports.removeBackground = async (req, res) => {
  try {
    const { inputFileName, outputFileName } = req.body;

    await removeBackground(inputFileName, outputFileName);

    res.status(200).send({ message: 'Background removido com sucesso!' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Erro ao remover o background.' });
  }
}