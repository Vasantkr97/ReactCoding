

interface Dropdownoption {
    value: string;
    label: string;
};

interface DropdownProps {
    label?: string;
    options: Dropdownoption[];
    onChange?: (option: Dropdownoption) => void;
    defaultValue?: string;
    className?: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | 'md' | 'lg';
}

const Dropdown: React.FC<DropdownProps> = ({
    label = "select an option",
    options = [],
    defaultValue = "",
    className = "",
    variant = 'primary',
    size = 'md'

}) => {

  return (
    <div>

    </div>
  )
}

export default Dropdown