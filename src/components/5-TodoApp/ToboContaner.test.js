import { TodoCantaner } from "./TodoContainer";
import { fireEvent, render,screen } from "@testing-library/react";
descrebe('test il' ,()=>{
    test('li',()=>{
        render(<TodoCantaner/>)
       const inputele= screen.getAllByPlaceholderText("Write a todo")
       const buttenele = screen.getAllByRole('button')
       fireEvent.change(inputele,{target:{value:"First todo"}})
       fireEvent.click(buttenele)
       expect(screen.getAllByText("First todo"))
       fireEvent.click(buttenele)
       

    })
})