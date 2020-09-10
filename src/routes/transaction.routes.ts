import { Router } from 'express';
import bcrypt from 'bcryptjs';

const transactionRouter = Router();

transactionRouter.post('/', async (request, response) => {
  try {
    // TODO
    const { payerIdentifier, value, recieverIdentifier } = request.body;

    const data = {
      payerIdentifier,
      value,
      recieverIdentifier
    }

    const qrCodeString = await bcrypt.hash(JSON.stringify(data), 8);
    console.log('qrCodeString', qrCodeString)
    response.json({ qrCodeString })
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
