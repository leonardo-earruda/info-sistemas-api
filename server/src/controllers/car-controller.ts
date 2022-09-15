import { Request, Response } from "express";
import { carRepository } from "../repositories/car-repository";

interface Car {
    placa: string;
    chassi: string;
    renavam: number;
    modelo: string;
    marca: string;
    ano: number;
}

export class CarController {
    async create(req: Request, res: Response) {
        const { placa, chassi, renavam, modelo, marca, ano } = req.body
        try {
            const newCar = carRepository.create({ placa, chassi, renavam, modelo, marca, ano })

            await carRepository.save(newCar)

            return res.status(201).json(newCar)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal server error ' })
        }
    }

    async findAll(req: Request, res: Response) {
        try {

            const allCars: any = await carRepository.query('select * from cars')

            return res.status(200).json(allCars);

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal server error ' })
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params

        let body: Car = req.body

        try {

            const newCar = await carRepository.update(id, body)

            return res.status(200).json(newCar)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal server error ' })
        }
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params

        try {

            const car = await carRepository.findOneBy({ id: Number(id) })

            return res.json(car)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal server error ' })
        }
    }

    async deleteById(req: Request, res: Response) {
        const { id } = req.params
        
        try {

            await carRepository.delete(id)

            return res.status(200).json({ message: 'Sucesso' })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal server error ' })
        }
    }
}
