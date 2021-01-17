// Unit Tests

import { mapProjectFromApiToVm } from './project.mapper';
import { Project as ViewProject, EmployeeSummary } from './project.vm';
import { Project as ApiProject } from '../project/api/project.api-model';

describe('/pods/project/project.mapper specs', () => {
  describe('mapProjectFromApiToVm', () => {
    it('should return empty project when it feeds project equals undefined | null', () => {
      // Arrange
      const apiProject1: ApiProject = undefined;
      const apiProject2: ApiProject = null;

      const emptyProject: ViewProject = {
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      };

      // Act
      const result1 = mapProjectFromApiToVm(apiProject1);
      const result2 = mapProjectFromApiToVm(apiProject2);

      // Assert
      expect(result1).toEqual(emptyProject);
      expect(result2).toEqual(emptyProject);
    });

    it('should return same project - input: empty project', () => {
      // Arrange
      const apiProject: ApiProject = {
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      };
      const viewProject: ViewProject = {
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      };

      // Act
      const result = mapProjectFromApiToVm(apiProject);

      // Assert
      expect(result).toEqual(viewProject);
    });

    it('should return same project - input: project - 1 employee', () => {
      // Arrange
      const apiProject: ApiProject = {
        id: '1',
        name: 'test',
        externalId: '3',
        comments: 'test',
        isActive: false,
        employees: [
          {
            id: '1',
            employeeName: 'name1',
            isAssigned: true,
          },
        ],
      };
      const viewProject: ViewProject = {
        id: '1',
        name: 'test',
        externalId: '3',
        comments: 'test',
        isActive: false,
        employees: [
          {
            id: '1',
            employeeName: 'name1',
            isAssigned: true,
          },
        ],
      };

      // Act
      const result = mapProjectFromApiToVm(apiProject);

      // Assert
      expect(result).toEqual(viewProject);
    });    

    it('should return same project - input: project - 2 employees', () => {
      // Arrange
      const apiProject: ApiProject = {
        id: '1',
        name: 'test',
        externalId: '3',
        comments: 'test',
        isActive: false,
        employees: [
          {
            id: '1',
            employeeName: 'name1',
            isAssigned: true,
          },
          {
            id: '2',
            employeeName: 'name2',
            isAssigned: false,
          },
        ],
      };
      const viewProject: ViewProject = {
        id: '1',
        name: 'test',
        externalId: '3',
        comments: 'test',
        isActive: false,
        employees: [
          {
            id: '1',
            employeeName: 'name1',
            isAssigned: true,
          },
          {
            id: '2',
            employeeName: 'name2',
            isAssigned: false,
          },
        ],
      };

      // Act
      const result = mapProjectFromApiToVm(apiProject);

      // Assert
      expect(result).toEqual(viewProject);
    });  

    it('should return same project - input: project with undefined parameters', () => {
      // Arrange
      const apiProject: ApiProject = {
        id: undefined,
        name: undefined,
        externalId: undefined,
        comments: undefined,
        isActive: undefined,
        employees: undefined,
      };
      const viewProject: ViewProject = {
        id: undefined,
        name: undefined,
        externalId: undefined,
        comments: undefined,
        isActive: undefined,
        employees: [],
      };

      // Act
      const result = mapProjectFromApiToVm(apiProject);

      // Assert
      expect(result).toEqual(viewProject);
    });

    it('should return same project - input: project with null parameters', () => {
      // Arrange
      const apiProject: ApiProject = {
        id: null,
        name: null,
        externalId: null,
        comments: null,
        isActive: null,
        employees: null,
      };
      const viewProject: ViewProject = {
        id: null,
        name: null,
        externalId: null,
        comments: null,
        isActive: null,
        employees: [],
      };

      // Act
      const result = mapProjectFromApiToVm(apiProject);

      // Assert
      expect(result).toEqual(viewProject);
    });

    it('should return same project - input: project - empty employee', () => {
      // Arrange
      const apiProject: ApiProject = {
        id: '1',
        name: 'test',
        externalId: '3',
        comments: 'test',
        isActive: false,
        employees: [],
      };
      const viewProject: ViewProject = {
        id: '1',
        name: 'test',
        externalId: '3',
        comments: 'test',
        isActive: false,
        employees: [],
      };

      // Act
      const result = mapProjectFromApiToVm(apiProject);

      // Assert
      expect(result).toEqual(viewProject);
    });

    it('should return same project - input: project - undefined employee', () => {
      // Arrange
      const apiProject: ApiProject = {
        id: '1',
        name: 'test',
        externalId: '3',
        comments: 'test',
        isActive: false,
        employees: [undefined],
      };
      const viewProject: ViewProject = {
        id: '1',
        name: 'test',
        externalId: '3',
        comments: 'test',
        isActive: false,
        employees: [
          {
            id: undefined,
            employeeName: undefined,
            isAssigned: undefined,
          },
        ],
      };

      // Act
      const result = mapProjectFromApiToVm(apiProject);

      // Assert
      expect(result).toEqual(viewProject);
    });

    it('should return same project - input: project - null employee', () => {
      // Arrange
      const apiProject: ApiProject = {
        id: '1',
        name: 'test',
        externalId: '3',
        comments: 'test',
        isActive: false,
        employees: [null],
      };
      const viewProject: ViewProject = {
        id: '1',
        name: 'test',
        externalId: '3',
        comments: 'test',
        isActive: false,
        employees: [
          {
            id: undefined,
            employeeName: undefined,
            isAssigned: undefined,
          },
        ],
      };

      // Act
      const result = mapProjectFromApiToVm(apiProject);

      // Assert
      expect(result).toEqual(viewProject);
    });
  });
});
