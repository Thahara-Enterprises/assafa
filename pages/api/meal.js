
import meal from '../../json/data.json';

export default async function handler(req, res) {

  //Return the content of the data file in json format
  res.status(200).json(meal);
}
