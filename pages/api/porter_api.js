// pages/api/locations.js

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await fetch('https://portersetup.com/api/locations')

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const data = await response.json()
      res.status(200).json(data)
    } catch (error) {
      console.error('Error fetching data:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
