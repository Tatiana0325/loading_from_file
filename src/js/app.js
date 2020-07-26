import read from './reader';
import json from './parser';

export default class GameSavingLoader {
    static load() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = read();
                const value = json(data);
                value.then((response) => {
                    const obj = JSON.parse(response);
                    resolve(obj);
                });
            }, 500);
        })
    }
}