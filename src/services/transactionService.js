import transactionRepository from "../repositories/transactionRepository.js";

async function create(body, id) {
  if (!id) throw new Error("User id is required");

  return await transactionRepository.create({ ...body, userId: id });
}

async function findAllByUser(id) {
  if (!id) throw new Error("User id is required");

  return await transactionRepository.findAllByUser(id);
}

async function update(transactionId, body, id) {
  if (!id) throw new Error("User id is required");

  return await transactionRepository.update(transactionId, {
    ...body,
    userId: id,
  });
}

export default { create, findAllByUser, update };
