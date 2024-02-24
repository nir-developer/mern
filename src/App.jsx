
    
      function App() {
        const continents = ['Asia' , 'Europe', 'America', 'Australia', 'Africa']
        const helloContinents = Array.from(continents, c => `Hello ${c}`)
        const message = helloContinents.join(' ')
        console.log(message)
        return <div><h1>{message}</h1>;</div>
      }

      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(<App />);

