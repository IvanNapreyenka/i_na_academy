export class ObjectManipulator {
    constructor(protected obj: any) {}

    public set(key: string, value: any): ObjectManipulator {
        return new ObjectManipulator({...this.obj, [key]: value});
    }
    
    public get(key: string): any {
        return this.obj[key];
    }
    
    public delete(key: string): ObjectManipulator {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }
    
    public getObject(): any {
        return this.obj;
    }
}





// Можно еще так
interface Modifiers {
    obj: {},
    set(key: string, value: any): Modifiers,
    get(key: string): Modifiers,
    delete(key: string): Modifiers,
    getObject(): Modifiers
}

export { Modifiers }

export class ObjectManipulator implements Modifiers{

    constructor(protected obj: Modifiers) {}

    public set(key, value) : Modifiers {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key) : Modifiers {
        return this.obj[key];
    }

    public delete(key) : Modifiers {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() : Modifiers {
        return this.obj;
    }
}