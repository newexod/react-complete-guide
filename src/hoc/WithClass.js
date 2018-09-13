import React, { Component } from 'react';

// 1 вариант
// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };


// Anonim class (2 вариант)
const withClass = (WrappedComponent, className) => {
  return class extends Component {
    render () {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
};

export default withClass;