import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent component specs', () => {
  it('should display the dialog when isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const dialogElement = screen.getByRole('dialog');

    // Assert
    expect(dialogElement).toBeInTheDocument();
  });

  it('should not display the dialog when isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    
    const dialogElement = screen.queryByRole('dialog');

    // Assert
    expect(dialogElement).not.toBeInTheDocument();
  });  
    
  it('should display the title, buttons and buttons text when isOpen is true', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const titleElement = screen.getByText(props.title);
    const buttonTextCloseElement = screen.getByText(props.labels.closeButton);
    const buttonTextAcceptElement = screen.getByText(props.labels.acceptButton);
    const buttonCloseElement = screen.getByRole('button', { name : props.labels.closeButton});
    const buttonAcceptElement = screen.getByRole('button', { name : props.labels.acceptButton});
    
    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(buttonTextCloseElement).toBeInTheDocument();
    expect(buttonTextAcceptElement).toBeInTheDocument();
    expect(buttonCloseElement).toBeInTheDocument();
    expect(buttonAcceptElement).toBeInTheDocument();
  });  

  it('should display the children text', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
    };

    const children = "Children";

    // Act
    render(<ConfirmationDialogComponent {...props}> {children} </ConfirmationDialogComponent>);

    const childrenElement = screen.getByText(children);

    // Assert
    expect(childrenElement).toBeInTheDocument();

  });  

  it('should call onClose property when it clicks on "Close" button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonCloseElement = screen.getByRole('button', { name : props.labels.closeButton});

    userEvent.click(buttonCloseElement);

    // Assert
    expect(props.onClose).toHaveBeenCalled();

  });

  it('should call handleAccept when it clicks on "Accept" button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "Title",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      },
    };

    //const handleAccept = jest.fn();

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonAcceptElement = screen.getByRole('button', { name : props.labels.acceptButton});

    userEvent.click(buttonAcceptElement);

    // Assert
    //expect(handleAccept).toHaveBeenCalled();
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();

  });
});