export default function EkMalzemelerCheckBox({ id, name, isChecked, toggle }){
    return (
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => toggle(id)}
          />
          {name}
        </label>
    );
}
