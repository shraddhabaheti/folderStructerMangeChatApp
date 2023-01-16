import { elementTypeAcceptingRef } from "@mui/utils";
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export const PostData = () => {
    const [item, setItem] = useState<any>([])
    const [inputData, setInputData] = useState<any>('');
    const [toggleButton, setToggleButton] = useState<any>(true)
    const [editItem, setEditItem] = useState<any>(null);
    const editItems = (id: any) => {
        let newEditItem = item.find((elem: any) => {
            return elem.id == id
        })
        setToggleButton(false)
        setInputData(newEditItem.name)
        setEditItem(id)
    }

    const delteItem = (index: any) => {
        const updateItem = item.filter((elem: any) => {
            return index !== elem.id
        })
        setItem(updateItem)
    }
    const removeAll = () => {
        setItem([])
    }
    const addItem = () => {
        if (!toggleButton) {

            let newValue = item.map((elem: any) => {

                if (elem.id === editItem) {
                    elem.name = inputData
                }
                return elem;
            })
            setItem(newValue);
            setToggleButton(true)
            setInputData('')

        } else {
            let allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItem([...item, allInputData])
            setInputData('')
        }

    }
    return (
        <div>
            <input type="text" name="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
            <button onClick={addItem}>{toggleButton ? "Add" : "Edit"}</button>
            {
                item.map((elem: any) => {
                    return (
                        <div key={elem?.id}>
                            <h3>{elem.name}</h3>
                            <button onClick={() => { delteItem(elem.id) }}>Delete</button>
                            <button onClick={() => { editItems(elem.id) }}>Edit</button>
                        </div>
                    )
                })

            }
            <button onClick={removeAll}>Remove</button>
        </div>
    )
}