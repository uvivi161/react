import { createContext, Dispatch } from 'react';
//הגדרת הסוג
export type MyUser = {
    id: number,
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    phone: string;
};
// הגדרת הפעולות
export type Action = {
    type: 'ADD' | 'UPDATE' | 'GET' | 'GET_BY_ID' | 'DELETE';
    data?: Partial<MyUser>;
    id?: number;
};

//מימוש הפעולות בסטייט
export const myUserReducer = (state: MyUser[], action: Action): MyUser[] | MyUser => {
    switch (action.type) {
        case 'GET':
            return state;
        case 'GET_BY_ID':
            if (action.id) {
                const user = state.find(user => user.id === action.id);
                return user ? user : [];
            }
            return [];
        case 'ADD':
            if (action.data)
                return [...state, { ...action.data, id: state.length + 1 } as MyUser];
            return state;
        case 'DELETE':
            if(action.id)
                return state.filter(user=>user.id!=action.id);
            return state;
        case 'UPDATE':
            if(action.data){
                return state.map(user=>user.id===action.id?{...user,...action.data}:user);
            }
            return state;
        default:
            return state;
    }
}

// הגדרת המצב ההתחלתי
const initialMyUserState: MyUser[] = [];
// הגדרת סוג קונטקסט
type MyUserContextType = [MyUser[], Dispatch<Action>];
//יצירת קונטקסט
export const myUserContext = createContext<MyUserContextType>([initialMyUserState, () => { }])