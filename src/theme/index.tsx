import React, { PropsWithChildren, useState } from 'react';

export type Theme = {
	mode: 'light' | 'dark';
	handelToggleMode?(): void;
};
export const ThemeContext = React.createContext<Theme>({
	mode: 'light',
});
export const useThemeContext = () => React.useContext<Theme>(ThemeContext);
const ThemeProvider = ({ children }: PropsWithChildren) => {
	const [mode, toggleMode] = useState<'light' | 'dark'>('light');
	const handelToggleMode = () => {
		const newMode = mode === 'light' ? 'dark' : 'light';
		toggleMode(newMode);
	};
	const value = React.useMemo(() => {
		return {
			mode,
			handelToggleMode,
		};
	}, []);
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
export default ThemeProvider;
