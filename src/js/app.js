import read from './reader';
import json from './parser';

export default class GameSavingLoader {
    static load() {
        return new Promise((resolve, reject) => {
            const data = read();
            data.then((response) => {
                const value = json(response);
                value.then((response) => {
                    const obj = JSON.parse(response);
                    resolve(obj);
                });
            });
        });
    };
};