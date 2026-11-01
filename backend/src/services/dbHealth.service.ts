import * as dbHealthRepository from "#src/repositories/dbHealth.repo.ts"
export async function getDbHealth(){
    return dbHealthRepository.getDbHealth();
}
