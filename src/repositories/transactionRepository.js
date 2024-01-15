import TransactionSchema from "../schemas/Transaction.js";

async function create(data) {
  return TransactionSchema.create(data);
}

async function update(id, data) {
  return TransactionSchema.findOneAndUpdate({ _id: id }, data, { new: true });
}

async function findAllByUser(id) {
  return await TransactionSchema.find({ userId: id });
}

export default { create, findAllByUser, update };
