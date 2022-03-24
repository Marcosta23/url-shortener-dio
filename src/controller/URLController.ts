import {Request, Response} from 'express'
import shortId from 'shortid'
import { config } from '../config/Constants'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        //ver se a URL já não existe
        //Criar o hash pra essa url

        const {originURL} = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        // salvar a URL no banco
        // Retornar a URL que  a gente salvou
        response.json ({ originURL, hash, shortURL })
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        //pegar hash da url
const { hash } = req.params
        //encontrar a url 

        const url = {
            originURL: 'https://cloud.mongodb.com/v2/6238e87098ce607ef932fb88#clusters',
            hash: '',
            shortURL: ''
        }
        //redirecionar para a url original a partir do qiue encontramos
    }
}