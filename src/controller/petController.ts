import { Router, Request, Response } from "express";
import { EspecieService } from "service/especie.service";
import { PetService } from "service/pet.service";

export const petRoutes = Router();

petRoutes.post("/", async (req: Request, res: Response): Promise<Response> => {
  const { nome, idEspecie, idRaca, idade } = req.body;

  const pet = await PetService.criarPet(nome, idEspecie, idRaca, idade);

  return res.status(201).json(pet);
});

petRoutes.get(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const pet = await PetService.buscarPetPorId(Number(id));

    return res.status(200).json(pet);
  }
);

petRoutes.put("/", async (req: Request, res: Response): Promise<Response> => {
  const { id, nome, idEspecie, idRaca, idade } = req.body;

  const pet = await PetService.alterarPet(
    Number(id),
    nome,
    idEspecie,
    idRaca,
    idade
  );

  return res.status(200).json(pet);
});

petRoutes.delete(
  "/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    await PetService.deletarPet(Number(id));

    return res.status(200).json();
  }
);
