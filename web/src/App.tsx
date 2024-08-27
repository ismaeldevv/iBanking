import { useNuiEvent } from './hooks/useNuiEvent';
import { fetchNui } from './utils/fetchNui';

import Banking from "./components/banking"

const App: React.FC = () => {

    return (
        <div className="app-wrapper">
            <Banking />
        </div>
    )
}

export default App;