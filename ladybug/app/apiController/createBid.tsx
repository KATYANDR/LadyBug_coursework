import axios from 'axios';

export interface Bid {
  name: string;
  phone: string;
  email: string;
  comment: string;
  code: string;
  TourName: string;
}

export async function createBid(bid: Bid): Promise<void | null> {
  try {
    const response = await axios.post(
      'http:/localhost:1337/api/bids',
      {
        data: bid,
      }
    );

    return response.data;
  } catch (error) {
    return null;
  }
}