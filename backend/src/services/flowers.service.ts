import * as flowersRepository from '#src/repositories/flowers.repository.ts';

export async function getFlowers() {
  return flowersRepository.getFlowers();
}
