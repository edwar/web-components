import { html, TemplateResult } from 'lit';
import '../src/Components/WyInputText/wy-input-text.js';

export default {
  title: 'Design System/Atoms/WyInputText',
  component: 'wy-input-text',
  argTypes: {
    error: {
      control: 'error',
      description: 'Mensaje de error'
    },
    identifier: {
      control: 'identifier',
      description: 'Identificador del input'
    },
    label: {
      control: 'label',
      description: 'Etiqueta label del input'
    },
    mode: {
      control: 'mode',
      description: 'Modo de la interfaz, claro u oscuro'
    },
    placeholder: {
      control: 'placeholder',
      description: 'Placeholder del input'
    },
    withError: {
      control: 'withError',
      description: 'Mostrar mensaje de error'
    },
    withLabel: {
      control: 'withLabel',
      description: 'Mostrar etiqueta label'
    }
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  error?: string
  identifier?: string
  label?: string
  mode?: string
  placeholder?: string
  withError?: boolean
  withLabel?: boolean
}

const Template: Story<ArgTypes> = ({
  error = 'Campo requerido',
  identifier = 'identifier',
  label = 'Nombre',
  mode = 'light',
  placeholder = '',
  withError = false,
  withLabel = false,
}: ArgTypes) => html`
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700&display=swap" rel="stylesheet">
  <wy-input-text
    error="${error}"
    identifier="${identifier}"
    label="${label}"
    mode="${mode}"
    placeholder="${placeholder}"
    ?with-error="${withError}"
    ?with-label="${withLabel}"
  >
  </wy-input-text>
`;

export const Default = Template.bind({})

export const withOnlyError = Template.bind({})
withOnlyError.args = {
  withError: true,
  label: 'Campo requerido'
}

export const withOnlyLabel = Template.bind({})
withOnlyLabel.args = {
  withLabel: true,
  label: 'Nombre',
  placeholder: ''
}

export const withOnlyPlaceholder = Template.bind({})
withOnlyPlaceholder.args = {
  placeholder: 'Nombre'
}

export const withLabelAndPlaceholderAndError = Template.bind({})
withLabelAndPlaceholderAndError.args = {
  withLabel: true,
  label: 'Nombre',
  withError: true,
  error: 'Campo requerido',
  placeholder: 'Nombre'
}

export const DefaultDarkMode = Template.bind({})
DefaultDarkMode.args = {
  mode: 'dark'
}

export const withOnlyErrorDarkMode = Template.bind({})
withOnlyErrorDarkMode.args = {
  withError: true,
  label: 'Campo requerido',
  mode: 'dark'
}

export const withOnlyLabelDarkMode = Template.bind({})
withOnlyLabelDarkMode.args = {
  withLabel: true,
  label: 'Nombre',
  placeholder: '',
  mode: 'dark'
}

export const withOnlyPlaceholderDarkMode = Template.bind({})
withOnlyPlaceholderDarkMode.args = {
  placeholder: 'Nombre',
  mode: 'dark'
}

export const withLabelAndPlaceholderAndErrorDarkMode = Template.bind({})
withLabelAndPlaceholderAndErrorDarkMode.args = {
  withLabel: true,
  label: 'Nombre',
  withError: true,
  error: 'Campo requerido',
  placeholder: 'Nombre',
  mode: 'dark'
}
