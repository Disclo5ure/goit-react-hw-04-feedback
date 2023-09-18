import PropTypes from 'prop-types';

export const Section = props => (
  <section>
    <h2>{props.title}</h2>
    {props.children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
