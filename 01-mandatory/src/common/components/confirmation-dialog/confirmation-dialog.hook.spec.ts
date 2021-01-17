import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from '../../models/';

describe('ConfirmationDialogHook hook specs', () => {
  it('should return an object with default/initial values when hook is called', () => {
    // Arrange
    const isOpen: Boolean = false;
    const itemToDelete: Lookup = createEmptyLookup();

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toEqual(isOpen);
    expect(result.current.itemToDelete).toEqual(itemToDelete);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should return an updated object with isOpen=true and itemToDelete updated values when onOpenDialog is called', () => {
    // Arrange
    const isOpen: Boolean = true;
    const itemToDelete: Lookup = {
      id: 'new id',
      name: 'new name',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(createEmptyLookup());

    act(
      () => { result.current.onOpenDialog(itemToDelete) }
    );
    expect(result.current.isOpen).toEqual(isOpen);
    expect(result.current.itemToDelete).toEqual(itemToDelete);
  });

  it('should return an updated object with itemToDelete updated when onAccept is called', () => {
    // Arrange
    const itemToDelete: Lookup = createEmptyLookup();

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    act(
      () => { result.current.onOpenDialog({
        id: 'new id',
        name: 'new name',
      }) }
    );
    expect(result.current.itemToDelete).toEqual({
      id: 'new id',
      name: 'new name',
    });

    act(
      () => { result.current.onAccept() }
    );
    expect(result.current.itemToDelete).toEqual(itemToDelete);
  });

  it('should return an updated object with isOpen=false when onClose is called', () => {
    // Arrange
    const isOpen: Boolean = false;
    const itemToDelete: Lookup = {
      id: 'new id',
      name: 'new name',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    act(
      () => { result.current.onOpenDialog(itemToDelete) }
    );
    expect(result.current.isOpen).toBeTruthy();

    act(
      () => { result.current.onClose() }
    );
    expect(result.current.isOpen).toEqual(isOpen);
  });
});
