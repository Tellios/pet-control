import { AsyncAction, replaceItem } from "app/state";
import { useTransaction, PondService, IPond } from "app/storage";
import { ServiceLocator } from "app/ioc";

export const updatePond: AsyncAction<IPond> = async (
  { state },
  pondToUpdate
) => {
  const updatedPond = await useTransaction(async entityManager => {
    const service = ServiceLocator.get(PondService);
    return await service.updatePond(entityManager, pondToUpdate);
  });

  state.ponds = replaceItem(state.ponds, updatedPond);
};
