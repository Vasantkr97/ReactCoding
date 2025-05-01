
type ProgresBarProps = {
    progress: number;
}

const ProgresBar: React.FC<ProgresBarProps> = ({ progress }) => {
    const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
        <div
            className="bg-blue-500 h-4 rounded-full transition-all duration-300"
            style={{ width: `${clampedProgress}%`}}
        >
        </div>
    </div>
  )
}

export default ProgresBar