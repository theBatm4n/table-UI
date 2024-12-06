import Button from "./button"

export const ButtonCellRenderer = (p) => {
    const ticker = p.data.ticker
    const segment = p.data.segment
    const metric = p.data.metric
    const selectedTopics = p.selectedTopics
    const handleClick = p.handleClick  
    return (
        <>
          <Button 
            value={ticker}
            selectedTopics={selectedTopics}
            handleClick={handleClick}
          />
          <span> {' > '} </span>
          <Button 
            value={segment}
            selectedTopics={selectedTopics}
            handleClick={handleClick}
          />
          <span> {' > '} </span>
          <Button 
            value={metric}
            selectedTopics={selectedTopics}
            handleClick={handleClick}
          />
        </>
      ); 
}