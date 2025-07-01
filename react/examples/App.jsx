import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import './App.css';

/**
 * Haupt-App Komponente - Demonstrates React Konzepte
 * 
 * Lernziele:
 * - useState Hook
 * - useEffect Hook
 * - Event Handling
 * - Conditional Rendering
 * - List Rendering
 * - Component Composition
 */
function App() {
    // State Management mit useState
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [theme, setTheme] = useState('light');
    const [todos, setTodos] = useState([
        { id: 1, text: 'React lernen', completed: false },
        { id: 2, text: 'JavaScript üben', completed: true },
        { id: 3, text: 'CSS Grid verstehen', completed: false }
    ]);

    // useEffect Hook - Side Effects
    useEffect(() => {
        // Component did mount
        console.log('App Component wurde geladen');
        
        // Cleanup function (component will unmount)
        return () => {
            console.log('App Component wird entladen');
        };
    }, []);

    // useEffect mit Dependency
    useEffect(() => {
        document.title = `Counter: ${count}`;
    }, [count]);

    // Event Handler Funktionen
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => Math.max(0, prevCount - 1));
    };

    const handleReset = () => {
        setCount(0);
    };

    const handleThemeToggle = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const handleAddTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: `Neue Aufgabe ${todos.length + 1}`,
            completed: false
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const handleToggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const handleSimulateLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    // Conditional Rendering
    const renderWelcomeMessage = () => {
        if (count === 0) {
            return <p className="welcome-message">Willkommen! Klicke auf die Buttons.</p>;
        } else if (count > 10) {
            return <p className="welcome-message">Wow! Du hast viel geklickt! 🎉</p>;
        } else {
            return <p className="welcome-message">Gut gemacht! Weiter so!</p>;
        }
    };

    return (
        <div className={`app ${theme}`}>
            <header className="app-header">
                <h1>React Learning App</h1>
                <Button 
                    variant="secondary" 
                    size="small"
                    onClick={handleThemeToggle}
                >
                    {theme === 'light' ? '🌙' : '☀️'} Theme
                </Button>
            </header>

            <main className="app-main">
                {/* Counter Section */}
                <section className="counter-section">
                    <h2>Counter Beispiel</h2>
                    <div className="counter-display">
                        <span className="counter-value">{count}</span>
                    </div>
                    
                    {renderWelcomeMessage()}
                    
                    <div className="button-group">
                        <Button 
                            variant="primary" 
                            onClick={handleIncrement}
                            disabled={isLoading}
                        >
                            ➕ Erhöhen
                        </Button>
                        
                        <Button 
                            variant="secondary" 
                            onClick={handleDecrement}
                            disabled={count === 0 || isLoading}
                        >
                            ➖ Verringern
                        </Button>
                        
                        <Button 
                            variant="danger" 
                            size="small"
                            onClick={handleReset}
                            disabled={count === 0 || isLoading}
                        >
                            🔄 Reset
                        </Button>
                    </div>
                </section>

                {/* Loading Example */}
                <section className="loading-section">
                    <h2>Loading State Beispiel</h2>
                    <Button 
                        variant="success"
                        onClick={handleSimulateLoading}
                        disabled={isLoading}
                        className={isLoading ? 'btn-loading' : ''}
                    >
                        {isLoading ? 'Lädt...' : 'Simuliere Loading'}
                    </Button>
                </section>

                {/* Todo List Example */}
                <section className="todo-section">
                    <h2>Todo Liste</h2>
                    
                    <Button 
                        variant="primary" 
                        size="small"
                        onClick={handleAddTodo}
                        className="add-todo-btn"
                    >
                        ➕ Aufgabe hinzufügen
                    </Button>

                    <div className="todo-list">
                        {todos.length === 0 ? (
                            <p className="empty-state">Keine Aufgaben vorhanden</p>
                        ) : (
                            todos.map(todo => (
                                <div 
                                    key={todo.id} 
                                    className={`todo-item ${todo.completed ? 'completed' : ''}`}
                                >
                                    <span 
                                        className="todo-text"
                                        onClick={() => handleToggleTodo(todo.id)}
                                    >
                                        {todo.text}
                                    </span>
                                    
                                    <div className="todo-actions">
                                        <Button 
                                            variant={todo.completed ? "success" : "secondary"}
                                            size="small"
                                            onClick={() => handleToggleTodo(todo.id)}
                                        >
                                            {todo.completed ? '✅' : '⭕'}
                                        </Button>
                                        
                                        <Button 
                                            variant="danger"
                                            size="small"
                                            onClick={() => handleDeleteTodo(todo.id)}
                                        >
                                            🗑️
                                        </Button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </section>

                {/* Button Showcase */}
                <section className="button-showcase">
                    <h2>Button Varianten</h2>
                    <div className="button-grid">
                        <Button variant="primary" size="small">Primary Small</Button>
                        <Button variant="primary" size="medium">Primary Medium</Button>
                        <Button variant="primary" size="large">Primary Large</Button>
                        
                        <Button variant="secondary" size="small">Secondary Small</Button>
                        <Button variant="secondary" size="medium">Secondary Medium</Button>
                        <Button variant="secondary" size="large">Secondary Large</Button>
                        
                        <Button variant="success" size="medium">Success</Button>
                        <Button variant="danger" size="medium">Danger</Button>
                        
                        <Button variant="primary" size="medium" disabled>
                            Disabled
                        </Button>
                    </div>
                </section>
            </main>

            <footer className="app-footer">
                <p>React Learning by Doing - Erstellt für Lernzwecke</p>
                <p>Counter: {count} | Theme: {theme} | Todos: {todos.length}</p>
            </footer>
        </div>
    );
}

export default App; 