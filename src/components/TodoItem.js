export function TodoItem({ id, title, complete }) {
  return <li>
    <input id={id} type='checkbox' className='cyrsor-pointer peer'/>
    <label htmlFor={id} className='peer-checked:line-through peer-checked:text-slate-500'>
        {title}
    </label>
  </li>;
}